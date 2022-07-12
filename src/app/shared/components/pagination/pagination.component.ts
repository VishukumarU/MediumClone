import { Component, Input, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
    selector: 'app-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

    pagesCount: number;
    pages: number[];
    @Input() totalRecords: number;
    @Input() limit: number;
    @Input() url: string;
    @Input() currrentPage: number;

    constructor(
        private utilsService: UtilsService
    ) { }

    ngOnInit (): void {
        this.pagesCount = Math.ceil(this.totalRecords / this.limit);
        this.pages = this.utilsService.range(1, this.pagesCount)
    }

}
