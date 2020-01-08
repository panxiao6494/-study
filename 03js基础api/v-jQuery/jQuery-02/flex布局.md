java + angularjs + angular2 + vuejs + react + ionic3移动端/react native移动端 + electron桌面端 + js原生语法

## flex容器

### 6种属性可以设置在容器上
水平主轴，垂直交叉轴
display: flex;  //inline-flex行内
flex-direction: row;  //主轴的方向， 还有column column-reverse 反转
flex-wrap: wrap;  //容器内是否允许换行 nowrap/wrap/wrap-reverse
justify-content: flex-start; //项目在主轴的对齐方式 flex-start/flex-end/center/space-between/space-around.
align-items: stretch;   //项目在交叉轴上的对齐方式 flex-start/flex-end/center/baseline/stretch
align-content: flex-start;  //多根轴线的对齐方式 flex-end/center/space-between/space-around/stretch

### 6种属性可以设置在item项目上
order: 0  //定义项目在容器中的顺序， 默认是0
flex: flex-grow, flex-shrink, flex-basis  //默认是 0 1 auto
align-self: auto //运行单个项目有不一样的对齐方式  flex-start/flex-end/center/baseline/stretch

(flex-grow 定义项目的放大比例， 容器在主轴上必须要有剩余空间才能扩大，各项目的最终大小=各项目的flex-basis + 扩大得到的大小
flex-shrink定义项目的缩小比例， 容器在主轴上空间不足以放下所有项目，各项目的大小 = 各项目的flex-basis - 瓜分得到的缩小份额
flex-basis 在flex项目放大缩小之前，各项目占据主轴空间的基值，默认auto，即项目本来大小
flex: 1; 快捷值 1 === 1 1 0%
flex：0; 快捷值 0 === 0 1 0%
flex：24px/1%; 快捷值 1 1 24px/1%为flex-basis的值
flex: 2 3; 快捷值 2 3 === 2 3 0%
flex: 11 30px; 快捷值 11 30px === 11 1 32px)