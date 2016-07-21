import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addBookmark() {
      const data = {
        nickname: this.nickname,
        url: this.url
      };

      fetch('https://tiny-tn.herokuapp.com/collections/cd-bookmarks', {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        method: 'post',
        body: JSON.stringify(data),
      });
    }
  }
});
