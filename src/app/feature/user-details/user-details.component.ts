import {
  ChangeDetectionStrategy,
  Component,
  Input,
  inject,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { GhUsersService } from 'src/app/shared/service/gh-users.service';
import { GithubUserDetails } from 'src/app/shared/model/github-user.model';
import { UserCardComponent } from './user-card/user-card.component';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule, UserCardComponent],
  template: `
    <app-user-card [userDetails]="userDetails()" />
    <!-- <pre>{{ userDetails() | json }}</pre> -->
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserDetailsComponent {
  private ghUserService: GhUsersService = inject(GhUsersService);
  userDetails = signal<GithubUserDetails>({
    login: '',
    id: 0,
    node_id: '',
    avatar_url: '',
    gravatar_id: '',
    url: '',
    html_url: '',
    followers_url: '',
    following_url: '',
    gists_url: '',
    starred_url: '',
    subscriptions_url: '',
    organizations_url: '',
    repos_url: '',
    events_url: '',
    received_events_url: '',
    type: '',
    site_admin: false,
    name: '',
    blog: '',
    hireable: false,
    public_repos: 0,
    public_gists: 0,
    followers: 0,
    following: 0,
    created_at: '',
    updated_at: '',
  });

  @Input() set username(username: string) {
    this.ghUserService
      .searchUser(username)
      .subscribe((details) => this.userDetails.set(details));
  }
}
