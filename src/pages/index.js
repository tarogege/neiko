import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>学习总结</h1>
    <ul>
      <li>
        <h2>HTML/CSS</h2>
        <div><a href={'http://www.runoob.com/html/html-tutorial.html'}>菜鸟教程</a></div>
        <div><a href={'http://www.w3school.com.cn/html/'}>w3c</a></div>
        <div><a href={'https://github.com/ruanyf/jstraining'}>js全栈入门培训</a></div>
        <div><a href={'https://github.com/f2e-awesome/knowledge'}>全栈开发知识图谱</a></div>
      </li>
      <li>
        <h2>Javascript</h2>
        <div>js权威指南 必读</div>
        <div>js语言精粹 在读</div>
        <div>es5-6-7</div>
      </li>
      <li>
        <h2>React/redux...</h2>
        <div><a href={'http://huziketang.mangojuice.top/books/react/lesson17'}>react小书</a></div>
        <div><a href={'https://github.com/dvajs/dva-knowledgemap'}>react knowledgemap</a></div>
      </li>
      <li>
        <h2>vue/vuex...</h2>
        <div><a href={'https://coding.imooc.com/lesson/107.html#mid=4205'}>慕课网项目实战</a></div>
      </li>
      <li>
        <h2>node.js</h2>
        <div><a href={'https://github.com/alsotang/node-lessons'}>node.js包教不包会</a></div>
        <div><a href={'https://cnodejs.org/getstart'}>cnode 中文论文---各资源汇总</a></div>
      </li>
      <li>
        <h2>性能优化</h2>
      </li>
      <li>
        <h2>作品整理</h2>
      </li>
      <li>
        <h2>其他细节</h2>
        <div>h5新特性</div>
        <div>css3新特性</div>
        <div>es5-6-7新特性</div>
        <div>canvas</div>
        <div>weex</div>
        <div>微信小程序</div>
        <div>其他后端语言</div>
      </li>
    </ul>
  </div>
)

export default IndexPage
