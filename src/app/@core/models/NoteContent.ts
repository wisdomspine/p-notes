export class NoteContent {
    noteId?: String;
    value?: String;

    constructor(
        init?: Partial<NoteContent>
    ){
        Object.assign(this, init);
    }
}