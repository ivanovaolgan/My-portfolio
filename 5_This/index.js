module.exports = {

    /**
     * @param {String} event
     * @param {Object} subscriber
     * @param {Function} handler
     */
    collection:[],

    on: function (event, subscriber, handler) {
        var collection=this.collection;
        var obj={};
        obj.event = event;
        obj.subscriber = subscriber;
        obj.handler = handler;
        collection.push(obj);
        this.collection = collection;
        return this;
    },

    /**
     * @param {String} event
     * @param {Object} subscriber
     */
    off: function (event, subscriber) {
        var collection=[];
        for (var i = 0; i < this.collection.length; i++){
            var collectionItem=this.collection[i];
            var iEvent = collectionItem.event;
            var iSubscriber = collectionItem.subscriber;
                if ((iEvent ==event && iSubscriber == subscriber)==false){
                    collection.push(collectionItem);
                }
        };
        this.collection = collection;
        return  this;
    },

    /**
     * @param {String} event
     */
    emit: function (event) {
        for (var i = 0; i < this.collection.length; i++){
            var collectionItem=this.collection[i];
            var iEvent = collectionItem.event;
            var iSubscriber = collectionItem.subscriber;
            var iHandler = collectionItem.handler;

            if (event == iEvent){
                iHandler.call(collectionItem.subscriber);
            }
        }
        return this;
    }
};

