import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addBlog() {
      const data = {
        url: this.url,
        nickname: this.nickname,
      };

    fetch('https://tiny-tn.herokuapp.com/collections/cd-bookmarks', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      method: 'post',
      body: JSON.stringify(data),
    });
  }
}
});
