/**
 * publish/subscribe
 *发布-订阅模式
 */

(function (window) {
    var q={};
    var topics={};
    var subUid=-1;

    q.subscribe=function (topic,func) {
        if(!topics[topic]){
            topics[topic]=[];
        }
        var subscribeId=(++subUid).toString();
        topics[topic].push({
           id:subscribeId,
           func:func
        });
        return subscribeId;
    }
    q.unsubscribe=function (id) {
        for(var m in topics){
            if(topics[m]){
                for(var i=0;i<topics[m].length;i++){
                    if(topics[m][i].id===id){
                        topics[m].splice(i,1);
                        return id;
                    }
                }
            }
        }
    }

    q.publish=function (topic,args) {
        if(!topics[topic]){
            return false;
        }
        var subList=topics[topic];
        var len=subList?subList.length:0;
        while(len--){
            subList[len].func(topic,args);
        }
    }
    window.pub=q;
})(window);