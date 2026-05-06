export class RateLimiter {
  private queue: (() => Promise<any>)[] = [];
  private active = 0;

  constructor(
    private limit: number,
    private interval: number,
  ) {
    setInterval(() => {
      this.active = 0;
      this.run();
    }, interval);
  }

  schedule<T>(task: () => Promise<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      this.queue.push(() => task().then(resolve).catch(reject));
      this.run();
    });
  }

  private run() {
    while (this.active < this.limit && this.queue.length) {
      const task = this.queue.shift()!;
      this.active++;
      task();
    }
  }
}
