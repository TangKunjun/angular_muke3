import {ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {NewProjectComponent} from '../new-project/new-project.component';
import {InviteComponent} from '../invite/invite.component';
import {ConfirmDialogComponent} from '../../shard/confirm-dialog/confirm-dialog.component';
import {slideToRight} from '../../anims/router.anim';
import {listAnimation} from '../../anims/list.anim';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
  animations: [slideToRight, listAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectListComponent implements OnInit {

  @HostBinding('@routeAnim') state;

  projects = [
    {
      id: 1,
      name: '企业协作平台',
      desc: '这是一个企业内部项目',
      coverImg: 'assets/img/covers/0.jpg',
    },
    {
      id: 2,
      name: '企业协作平台2',
      desc: '这是一个企业内部项目2',
      coverImg: 'assets/img/covers/1.jpg',
    }
  ];
  constructor(private dialog: MatDialog, private cd: ChangeDetectorRef) { }

  ngOnInit() {
  }

  openNewProjectDialog() {
   const dialogRef =   this.dialog.open(NewProjectComponent, {
      data: {
        title: '新增项目'
      }
    });

   dialogRef.afterClosed().subscribe(value => {
     console.log(value);
     this.projects = [...this.projects,
         {
             id: 3,
             name: '企业协作平台3',
             desc: '这是一个企业内部项目3',
             coverImg: 'assets/img/covers/2.jpg',
         }
     ];
     this.cd.markForCheck();
   });
  }

  launchInviteDialog() {
    const dialogRef =   this.dialog.open(InviteComponent);
  }

  launchUpdateDialog() {
    const dialogRef = this.dialog.open(NewProjectComponent, {
      data: {title: '编辑项目'}
    });
  }

  launchRemoveDialog(project) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: '删除确认',
        content: '是否删除该项目？'
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.projects = this.projects.filter(p => p.id !== project.id);
    });

    this.cd.markForCheck();
  }
}
