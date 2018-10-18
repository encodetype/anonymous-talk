import { Meteor } from 'meteor/meteor';



Meteor.startup(() => {
  // code to run on server at startup
  Chats = new Mongo.Collection('chats');

  Meteor.publish('cur_chat',()=>{
    return Chats.find();
  });

  Meteor.methods({
    send_message(uid,msg){
      Chats.insert({ user:uid,msg:msg,created:new Date() });
    }
  });

});
