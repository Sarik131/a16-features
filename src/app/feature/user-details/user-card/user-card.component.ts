import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubUserDetails } from 'src/app/shared/model/github-user.model';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="bg-slate-600 rounded-lg shadow-2xl p-4 flex flex-col items-center"
    >
      <img
        [src]="userDetails.avatar_url"
        class="rounded-full w-32 h-32 object-cover mx-auto"
      />
      <h1>Name: {{ userDetails.login }}</h1>
      <h1>Public repository:{{ userDetails.public_repos }}</h1>
      <span>More props coming...</span>

      <span></span>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserCardComponent {
  @Input({ required: true }) userDetails!: GithubUserDetails;
}
