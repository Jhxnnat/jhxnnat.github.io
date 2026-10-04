---
title: Minecraft
---

## {{title}} Post

{%- for post in collections.minecraft %}
- [{{ post.data.title }}]({{ post.url}})
{%- endfor %}

