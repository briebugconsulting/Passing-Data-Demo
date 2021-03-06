app.service('visitorDataService', function() {

    var item = 1;
    var visitor1ControllerContext;
    var svc = {
        changeItem: function() {
            item = Math.floor((Math.random() * 100) + 1);
            this.notifyAll();
        },

        getItem: function(){
            return item;
        },

       registerContext: function (context) {
            visitor1ControllerContext = context;
        },

        notifyAll: function () {
            if(visitor1ControllerContext){
                visitor1ControllerContext.myItem();
            }
        }
    }

    return svc;

});