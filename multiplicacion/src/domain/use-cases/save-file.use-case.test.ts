import { describe, test, expect, afterEach, jest } from '@jest/globals';
import { SaveFile } from './save-file.use-case';
import fs from 'fs';



describe('SaveFileUseCase',() =>{

    const customOptions = {
        fileContent: 'probando la pequeña aplicacion de multiplacación',
        fileDestination: 'outputs',
        fileName:'cristobal'
    }

    const customfilePath = `${customOptions.fileDestination}/${customOptions.fileName}.txt`;

    afterEach(()=>{
        const exitsFolderOutput = fs.existsSync('outputs');
        if (exitsFolderOutput) fs.rmSync('outputs',{recursive:true});
    });

    test('',()=>{
        const saveFile = new SaveFile();
        const filePath = 'outputs/table.txt';
        const options = {
            fileContent:'test content'
        }

        const result = saveFile.execute(options);
        const fileExits = fs.existsSync(filePath);
        const fileContent = fs.readFileSync(filePath,{encoding:'utf-8'});
        
        expect(result).toBe(true);
        expect(fileExits).toBe(true);
        expect(fileContent).toBe(options.fileContent);
    });

    test('should save file with custom values',()=>{
        const saveFile = new SaveFile();
    
        const result = saveFile.execute(customOptions);
        const fileExits = fs.existsSync(customfilePath);
        const fileContent = fs.readFileSync(customfilePath,{encoding:'utf-8'});

        expect(result).toBe(true);
        expect(fileExits).toBe(true);
        expect(fileContent).toBe(customOptions.fileContent);

    });
    test('should return false if directory could not be create',()=>{
        const saveFile = new SaveFile();
        const mkdirSpy = jest.spyOn(fs,'mkdirSync').mockImplementation(
            () => {throw new Error('Error Custom of Testing');}
        );
        const result = saveFile.execute(customOptions);

        expect(result).toBe(false);

        mkdirSpy.mockRestore(); // si no lo invoco persiste el error provacado

    });

    test('should return false if file could not be create',()=>{
        const saveFile = new SaveFile();
        const writeFileSpy = jest.spyOn(fs,'writeFileSync').mockImplementation(
            () => {throw new Error('Error Custom writing of Testing');}
        );
        const result = saveFile.execute({fileContent:'Hola'});

        expect(result).toBe(false);

        writeFileSpy.mockRestore();

    });
});