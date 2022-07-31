import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-article-form',
    templateUrl: './article-form.component.html',
    styleUrls: ['./article-form.component.scss']
})
export class ArticleFormComponent implements OnInit {

    private _initialValues: MediumClone.IArticleInput;
    form: FormGroup;
    @Input() isSubmitting: boolean | null;
    @Input() errors: MediumClone.IBackEndErrors | null;
    @Output() article: EventEmitter<MediumClone.IArticleFormValue> = new EventEmitter<MediumClone.IArticleFormValue>();

    @Input() set initialValues (value: MediumClone.IArticleInput | null) {
        this._initialValues = value!;
        this.initializeForm();
    }
    get initialValues (): MediumClone.IArticleInput {
        return this._initialValues;
    }
    constructor (
        private fb: FormBuilder
    ) { }

    ngOnInit (): void {
        this.form = this.fb.group({
            title: [''],
            description: [''],
            tagList: [''],
            body: ['']
        })
    }

    initializeForm (): void {
        this.form?.setValue({
            title: this.initialValues.title,
            description: this.initialValues.description,
            tagList: this.initialValues.tagList.join(', '),
            body: this.initialValues.body
        })
    }

    onSubmit () {
        this.article.emit(this.form.value);
    }

}
