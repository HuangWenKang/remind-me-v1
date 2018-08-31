export class Reminder {
    id: string = '';
    title: string = '';
    dueDate: Date = new Date();

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}