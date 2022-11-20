import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import * as path from 'path'
import * as fs from 'fs'

@Injectable()
export class FilesService {

    async createFile(file): Promise<string> {
        try {
            const fileName = Date.now() + '.jpg'
            const filePath = path.resolve(__dirname, '..','static')

            if(!fs.existsSync(filePath)) {
                fs.mkdirSync(filePath, {recursive: true})
            }

            fs.writeFileSync(path.join(filePath, fileName), file.buffer)
            return fileName
        } catch(err) {
            throw new HttpException('Произошла ошибка при записи файла', HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
}
