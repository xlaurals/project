import { Location } from './location.model';
import { ProjectKit } from './projectKit.model';

export class Work {
    id: string;
    start: Date;
    end: Date;
    user: string;
    reason: string;
    location: Location;    
    projectKit: ProjectKit;
    option: string;

}