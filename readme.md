
```
<li class="content">
    <div>
        <h5>我这里写了很多标题</h5>
        <h2>zhanhznazhang</h2>
        <div>
            <span></span>
        </div>
    </div>
    <div>
        <p>内容很多呢</p>
    </div>
</li>
```

转化为
```
[
'<li class="content">',
    '<div>',
        '<h5>我这里写了很多标题</h5>',
        '<h2>zhanhznazhang</h2>',
        '<div>',
            '<span></span>',
        '</div>',
    '</div>',
    '<div>',
        '<p>内容很多呢</p>',
    '</div>',
'</li>'
]

```
然后用数组的join方法就可以了
