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








