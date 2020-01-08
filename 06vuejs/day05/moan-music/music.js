window.onload = function(){
	new Vue({
		el:"#music",
		data: {
			list: ['music/1.mp3', 'music/2.mp3'],
			index: 0
		},
		computed: {
			src(){
				return this.list[this.index]
			}
		},
		methods: {
			play(){
				this.$refs.myaudio.paused ? this.$refs.myaudio.play() : this.$refs.myaudio.pause();
			},
			pause(){
				this.$refs.myaudio.pause();
			},
			prev(){
				let index = this.index - 1;
				if (index < 0) {
					index = this.list.length - 1;
				}
				this.index = index;
				//play audio   nexttick
				//vue eventloop  js 主线程 任务线程
				this.$nextTick(()=>this.$refs.myaudio.play())
				
			},
			next() {
				let index = this.index + 1;
				if (index === this.list.length) {
					index = 0;
				}
				this.index = index;
				this.$nextTick(()=>this.$refs.myaudio.play())
			}
		}
	})
}