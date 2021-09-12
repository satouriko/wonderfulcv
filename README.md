# WonderfulCV

## 2.0

### 新特性

- [x] Nuxt 预渲染
- [x] 多语言

### 新问题

- [ ] FOUC，原因是 Nuxt 暂不支持 Vue3，而 vue-fragment 是运行时替换标签

## 使用说明

**你需要基本的前端知识才能使用。** 包括如何安装、如何运行，以及基本的 TypeScript 知识。

如果你只需要使用它，只需要 **修改项目根目录下的 `wonderfulcv.config.ts` 和 `wonderfulcv.config.css`** 就可以了。
**查看 `wonderfulcv.ts` 来探索可以修改的选项**，有若干种样式可以组合使用，Demo 网站并没有展示它们。

如果你前端技能比较娴熟并且会 Vue，那么你可以自己任意修改它的功能和表现。
考虑到你很可能有此需求，我把它设计为了 Template Repository 而不是 NPM 包。

## 灵感

制作中文简历用 Word 对齐很难操作，用 LaTeX 设置字体、还有模板制作都很复杂。受到 [超级简历网](https://www.wondercv.com) 的启发，我制作了这个快速制作简历的工具。

[超级简历网](https://www.wondercv.com) 上没有复杂的模板，总共只有（基本信息）3 x（模块）4 种排版方式可供选择。但是这却让我感觉足够了，网上太多花哨的简历模板并不适合用来求职。
因此受它的启发，我发现一个好的简历工具并不需要像 Word 或 LaTeX 这样能够创作出样式排版任意复杂的文档，只需要有有限的几种排版选项，若干可定制的样式（如颜色、字体），再加上用户可以方便地把信息填进去，就足够了。

但是我还是遇到了一些解决不了的问题，比如它不支持在个人信息中添加一个 GitHub 链接。
所以我决定自己复刻一个类似的东西，我写的这个很容易扩展，因为是开源的。
[超级简历网](https://www.wondercv.com) 上还有十分酷炫的「智能一页」功能，这用 Web 技术实现起来也非常简单。
此外，我还给它加了 [中文文案排版自动纠正](https://github.com/satouriko/copywriting-correct) 的功能。

即便我写了这个项目，我还是推荐大家去 [超级简历网](https://www.wondercv.com) 注册并体验一下。
它里面的一些修改简历的建议非常有帮助，而这部分我丝毫没有照搬过来。
注：用用就行了，不要把真实的个人信息填进去哦

---

This project is inspired by [WonderCV](https://www.wondercv.com),
intended for creating beautiful CVs with Web technologies.
For English users, try to make their CVs with [LaTeX](https://www.overleaf.com/latex/templates/tagged/cv) maybe not a bad choice.
However, for Chinese users, it's too tedious to make LaTeX render Chinese characters properly.
That's why this project was born.

This template should also be a great tool for making English CVs too.

To use, just fill in `wonderfulcv.config.ts` and `wonderfulcv.config.css` and you'll be good to go.

You'll need basic web front-end knowledge to start. Inspect `wonderfulcv.ts` to find more options
about configuration, most of them are not demonstrated in the demo website.
