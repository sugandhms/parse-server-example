Parse.Push.send({
  channels: ['test-channel'],
  data: {
    alert: 'Test',
    badge: 1,
    sound: 'default'
  }
}, {
  success: function() {
    console.log('##### PUSH OK');
  },
  error: function(error) {
    console.log('##### PUSH ERROR');
  },
  useMasterKey: true
});
