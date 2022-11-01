import { Inject, Injectable } from '@angular/core';
import { FileSystemAdapter } from '../../../../../shared/ElectronApi';


@Injectable({
  providedIn: 'root'
})
export class ElectronService {
 

  constructor(@Inject("FileSystemAdapter") private fileSystemAdapter: FileSystemAdapter) {}

  get isElectron(): boolean {
    return !!(window && window.process && window.process.type);
  }

  public saveFile(filename: string, content: string): void {
    this.fileSystemAdapter.saveFile({filename, content});
  }
}
