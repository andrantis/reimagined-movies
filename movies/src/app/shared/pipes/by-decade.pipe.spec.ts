import { ByDecadePipe } from './by-decade.pipe';

describe('ByDecadePipe', () => {
  it('create an instance', () => {
    const pipe = new ByDecadePipe();
    expect(pipe).toBeTruthy();
  });
});
