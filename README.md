# learning
Vue学习小记

最近在看Vue,记录一下学习过程中自己感觉容易忘记或者忽略或者重要的信息

###Vue组件###

1、当使用 DOM 作为模板时 (例如，使用 el 选项来把 Vue 实例挂载到一个已有内容的元素上)，你会受到 HTML 本身的一些限制，因为 Vue 只有在浏览器解析、规范化模板之后才能获取其内容。尤其要注意，像 ul、ol、table、select样的元素里允许包含的元素有限制，而另一些像 option 这样的元素只能出现在某些特定元素的内部。

解决办法： 使用is特性，例如

	<table>
	  <tr is="my-row"></tr>
	</table>

2、vue父组件使用prop向子组件传递数据
传递数据时，子组件显式的声明props

	props: [
		propA,
		propB,
		...
	]
或者

	props: {
		propA: Number,//验证类型
		propB: [Number, String],//验证多种类型
		propC: {
			type: Number,
			required: true
		},//必传
		propD: {
			type: Object,
			default: function() {
				return {
					message: 'hello'
				}
			}// 数组/对象的默认值应当由一个工厂函数返回
		}// 返回默认值
	}

3、vue规定prop为单项数据流，即只能由父组件通过prop传递数据给子组件，而不允许子组件对prop接收到数据的修改

*但是有些时候子组件会想要改变接收到的值，一般会用$emit来向父组件发送通知，要求调用函数。vue中提供了.sync修饰符，实际是一个语法糖，调用后执行prop数据传输和父组件函数定义，子组件一旦改变带有.sync修饰符的参数，就会调用$emit向父组件通知*

###Vue过渡与动画

vue为元素添加过渡或者动画用transition标签

1、初次渲染过渡可以用appear特性

```
<transition appear>
	...
</transition>
```
2、多个元素过渡，v-if切换拥有相同标签名的标签时，应该为元素设置key属性，否则不会产生切换效果

```
<transition>
  <button v-if="isEditing" key="save">
    Save
  </button>
  <button v-else key="edit">
    Edit
  </button>
</transition>
```
3、使用多个v-if的多个过渡元素可以重写为一个绑定了动态属性的过渡元素

```
<transition>
  <button v-if="docState === 'saved'" key="saved">
    Edit
  </button>
  <button v-if="docState === 'edited'" key="edited">
    Save
  </button>
  <button v-if="docState === 'editing'" key="editing">
    Cancel
  </button>
</transition>
```
重写=>

```
<transition>
	<button :key="docState">{{ buttonMessage }}</button>
</transition>
```

```
computed: {
	buttonMessage: function() {
		switch(this.docState) {
			case 'saved': return 'Edit';
	      	case 'edited': return 'Save';
	      	case 'editing': return 'Cancel';
		}
	}
}
```
4、列表过渡一般用transition-group,该标签在渲染时会产生一个真实的span元素,可以用tag属性来更改产生的标签类型。










