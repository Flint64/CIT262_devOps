import { expect } from '@jest/globals';
import sayHello from '../utils/helloworld.js'

it("should say hello",()=>{
    const hello = sayHello();

    expect(hello).toBe("hello");    
});