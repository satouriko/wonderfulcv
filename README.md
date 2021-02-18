# WonderfulCV

制作中文简历用 Word 对齐很难操作，用 LaTeX 设置字体、还有模板制作都很复杂。受到 [超级简历网](https://www.wondercv.com) 的启发，我制作了这个快速制作简历的工具。

[超级简历网](https://www.wondercv.com) 上没有复杂的模板，总共只有（基本信息）3 x（模块）4 种排版方式可供选择。但是这却让我感觉足够了，网上太多花哨的简历模板并不适合用来求职。
因此受它的启发，我发现一个好的简历工具并不需要像 Word 或 LaTeX 这样能够创作出样式排版任意复杂的文档，只需要有有限的几种排版选项，若干可定制的样式（如颜色、字体），再加上用户可以方便地把信息填进去，就足够了。

但是我还是遇到了一些解决不了的问题，比如它不支持在个人信息中添加一个 GitHub 链接。
所以我决定自己复刻一个类似的东西，用我觉得更友好的配置文件而不是图形界面来配置。
[超级简历网](https://www.wondercv.com) 上还有十分酷炫的「智能一页」功能，这用 Web 技术实现起来也非常简单。
此外，我还给它加了 [中文文案排版自动纠正](https://github.com/satouriko/copywriting-correct) 的功能。

即便我写了这个项目，我还是推荐大家去 [超级简历网](https://www.wondercv.com) 注册并使用一下。
它里面的一些修改简历的建议非常有帮助，而这部分我丝毫没有照搬过来。

使用它只需要修改项目根目录下的 `wonderfulcv.config.ts` 和 `wonderfulcv.config.css` 就可以了。

---

This project is inspired by [WonderCV](https://www.wondercv.com),
intended for creating beautiful CVs with Web technologies.
For English users, try to make their CVs with [LaTeX](https://www.overleaf.com/latex/templates/tagged/cv) maybe not a bad choice.
However, for Chinese users, it's too tedious to make LaTeX render Chinese characters properly.
That why this project was born.
