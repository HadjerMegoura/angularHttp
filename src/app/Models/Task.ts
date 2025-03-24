export class Task {
    constructor(public title: string,
        public description: string,
        public AssignTo: string,
        public createdAt: string,
        public priority: string,
        public status: string,
        //id optional cuz we need it only in some operations
        public id?: string
    ) {
       
    }
}