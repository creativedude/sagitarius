// addresses go here, as we may want to change them in future, probably not, but just good practice
import { Injectable } from '@angular/core'; 
@Injectable() 
export class Addresses {
    public readonly searchAPI: string = 'https://api.github.com/search/repositories'; 
} 