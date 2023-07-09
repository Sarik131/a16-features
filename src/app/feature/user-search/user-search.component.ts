import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { debounceTime, distinctUntilChanged, filter, switchMap } from 'rxjs';
import { GhUsersService } from 'src/app/shared/service/gh-users.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-search',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <input
      #input
      (input)="searchTerm.set(input.value)"
      type="text"
      class="border-white border-2 border-solid rounded-lg outline-none p-4 bg-transparent w-full"
    />
    <ul>
      <li
        [routerLink]="['/user-detials', user.login]"
        *ngFor="let user of ghUsers()"
        class="border-white border-solid border-2 rounded-lg my-4 flex items-center gap-4 py-2 h-20 cursor-pointer"
      >
        <img
          [src]="user.avatar_url"
          alt="User image"
          class="rounded-full w-12 h-12 object-cover ml-3"
        />
        <p>
          {{ user.login }}
        </p>
      </li>
    </ul>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserSearchComponent {
  searchTerm = signal('');
  private ghUserService: GhUsersService = inject(GhUsersService);

  ghUsers = toSignal(
    toObservable(this.searchTerm).pipe(
      debounceTime(500),
      distinctUntilChanged(),
      filter((term) => term.length > 0),
      switchMap((term) => this.ghUserService.searchUsers(term))
    ),
    { initialValue: [] }
  );
}
