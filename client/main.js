import moment from 'moment';
import uuid from 'uuid';
import { ReactiveVar } from 'meteor/reactive-var'
import { Session } from 'meteor/session'

import './components/chat';
import './components/input';

import 'bulma/css/bulma.css'

import './main.html';

uid = uuid();

Session.set('uid',uid);

Chats = new Mongo.Collection('chats');

Template.Chat_Timer.onCreated(function(){
  self = this;

  self.timer = new ReactiveVar(null);
});

Template.Chat_Timer.onRendered(function(){
  self = this;

  Meteor.setInterval(function(){
    //console.log(self.timer)
    self.timer.set(new Date());
  },1000);
});

Template.Chat_Timer.helpers({
  timer(){
    return Template.instance().timer.get()
  }
})
