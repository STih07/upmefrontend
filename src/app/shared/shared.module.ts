import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { RouterModule } from '@angular/router';
import { MentorsCardComponent } from './components/mentors-card/mentors-card.component';
import { ResidentsCardComponent } from './components/residents-card/residents-card.component';
import { DropdownFilterComponent } from './components/dropdown-filter/dropdown-filter.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ProposalCardsComponent } from './components/proposal-cards/proposal-cards.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
    declarations: [
        ModalComponent,
        UserCardComponent,
        MentorsCardComponent,
        ResidentsCardComponent,
        DropdownFilterComponent,
        ProposalCardsComponent,
        FooterComponent,
        HeaderComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        MatExpansionModule,
        MatCheckboxModule,
        MatInputModule,
        MatIconModule,
    ],
    exports: [
        ModalComponent,
        UserCardComponent,
        MentorsCardComponent,
        ResidentsCardComponent,
        DropdownFilterComponent,
        ProposalCardsComponent,
        FooterComponent,
        HeaderComponent
    ]
})
export class SharedModule { }
