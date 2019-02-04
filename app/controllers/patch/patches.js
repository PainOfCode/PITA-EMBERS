import Controller from '@ember/controller';

export default Controller.extend({

  actions:{
    deletePatch(){
      let _this = this;
      async function delCmt(_this){
        console.log(_this.get('model.comments._objects'));
        var comment = _this.get('model.comments._objects');
        for (var i = 0; i < _this.get('model.comments._objects.length');i++){
          comment[i].destroyRecord();
        }
        return 1;
      }
      function delPtch(_this){
        _this.get('model').destroyRecord();
        _this.transitionToRoute('patch.overview');
      }
      if (this.get('model.comments._objects')){
        delCmt(_this).then(()=>(delPtch(_this)));
      }else{
        delPtch(_this);
      }

    }
  }

});
