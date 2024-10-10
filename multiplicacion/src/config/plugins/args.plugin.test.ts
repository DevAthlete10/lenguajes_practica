import { beforeEach, describe, expect, jest, test } from '@jest/globals';


const runCommand = async(args: string[]) =>{
    process.argv = [...process.argv,...args];
    const {yarg} = await import('./args.plugin');
    return yarg;
} 

describe('Test a Args', ()=> {
    const originalArgv = process.argv;
    beforeEach(() => {
        process.argv = originalArgv;
        jest.resetModules();
    });

    test('should return default value',async () => {
        const argv = await runCommand(['-b','5']);

        expect(argv).toEqual(expect.objectContaining({
            b:5,
            l:10,
            s:false,
            n:'table',
            d:'outputs',
        }));
    });
    test('should return custom value',async () => {
        const argv = await runCommand([
            '-b','10',
            '-l','12',
            '-s','true',
            '-n','cristobal-pro',
        ]);

        expect(argv).toEqual(expect.objectContaining({
            b:10,
            l:12,
            s:true,
            n:'cristobal-pro',
            d:'outputs',
        }));
    });
});
