import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlphaCasePipe } from './alpha-case.pipe';

import { MessageComponent } from './message.component';

describe('MessageComponent', () => {
  let component: MessageComponent;
  let fixture: ComponentFixture<MessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageComponent , AlphaCasePipe ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('title should say Thought for the day',() => {
    expect(component.title).toEqual('Thought for the day');
  })
  it('Should display message', ()=> {
    expect(component.show()).toBeTruthy();
  });
  it('Should hide message', ()=> {
    expect(component.hide()).toBeFalsy();
  });
  it('Message',() =>{
     let a1= fixture.nativeElement.querySelectorAll('div')
     let value = a1[1].innerHTML.trim; 
    expect(value).toEqual('Success is achived through accurate efforts'.trim) 
  })

});
