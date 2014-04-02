var BlueButton = cc.Sprite.extend({
	ctor : function(x,y){
		this._super();
		this.initWithFile('res/images/blue2.png');
		this.movingAction = this.createAnimationAction();
		this.runAction(this.movingAction);
	},
	createAnimationAction: function() {
		var animation = new cc.Animation.create();
		animation.addSpriteFrameWithFile( 'res/images/blue2.png' );
		animation.addSpriteFrameWithFile( 'res/images/blue1.png' );
		console.log( animation.getDelayPerUnit() );
		animation.setDelayPerUnit( 0.5 );
		return cc.RepeatForever.create( cc.Animate.create( animation ) );
    }
})