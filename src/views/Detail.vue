<script setup>
import {ref} from "vue";

const author = ref("")
const curr = ref("")
const authors = ref([
  {
    name: "张三",
    article: [
      {
        title: "test title",
        content: `
# 反引号

反引号一般用于表名和字段名，而单引号和双引号一般用于字符串和日期。

在MySQL中，反引号（\`）用于标识标识符（如列名、表名、别名等），特别是当这些标识符包括保留关键字或空格时。使用反引号将标识符括起来，使其在SQL语句中被视为单个标识符，而不会被解释为关键字或分隔符。

例如，如果你有一个表名为"order"，则可以使用反引号来指定这个表：

\`\`\`mysql
SELECT * FROM \`order\`;
\`\`\`

需要注意的是，在标识符中使用反引号的方法，在不同的数据库中可能会有所不同。此外，使用反引号来引用标识符也可能会对应用程序的可移植性造成影响，因为一些数据库系统可能不支持它们。

务必要记住：保留字既不能作为表名，也不能作为字段名，如果非要这么操作，请记住要增加反引号！

\`\`\`mysql
以下是使用反引号的示例：

1. 用于标识列名

例如，如果你有一个包含空格的列名，如 "first name"，则可以使用反引号将其括起来：SELECT \`first name\` FROM customers;

2. 用于标识表名

例如，如果你有一个包含保留关键字的表名，如 "order"，则可以使用反引号将其括起来：SELECT * FROM \`order\`;

3. 用于别名

例如，如果你想给一个列指定一个自定义别名，如 "total sales"，则可以使用反引号将其括起来：SELECT SUM(sales) AS \`total sales\` FROM orders;

需要注意的是，在标识符中使用反引号时，也要确保反引号成对出现，否则可能会导致语法错误。
\`\`\`

- 如果表名或字段名是MySQL的保留字，比如\`select\`或\`create\`，那么必须用反引号括起来，否则会出现语法错误。例如：

\`\`\`sql
create database \`create\`;
select * from \`select\`;
\`\`\`

- 如果表名或字段名包含特殊字符，比如空格或连字符，那么也需要用反引号括起来。例如：

\`\`\`sql
create table \`user-info\` (\`user-id\` int, \`user-name\` varchar(20));
select \`user-name\` from \`user-info\`;
\`\`\`

- 如果表名或字段名不是MySQL的保留字，也不包含特殊字符，那么可以不用反引号括起来。但是为了避免潜在的冲突和混淆，有些人习惯总是用反引号括起来。例如：

\`\`\`sql
create table \`book\` (\`id\` int, \`title\` varchar(50), \`author\` varchar(20));
select \`title\`, \`author\` from \`book\`;
\`\`\`

- 单引号和双引号一般用于字符串和日期的值，而不是表名或字段名。例如：

\`\`\`sql
insert into book values (1, 'Harry Potter', 'J.K. Rowling');
select * from book where title = "Harry Potter";
\`\`\`

# 字段名是否应该加上引号

<font color=#6a5acd>**MySQL语句中的字段名是否应该加上引号，取决于引号的类型和字段名是否是保留字/mysql 建表语句里的表名，字段名应该用单引号还是双引号**</font>

- 单引号（'）和双引号（\\"）一般用于表示字符串类型的值，而不是字段名。如果字段名是数值类型的，不能使用单引号或双引号。
- 反引号（\`）用于区分MySQL的保留字与普通字符。如果字段名是MySQL的保留字，比如select、insert等，必须加上反引号来避免错误。如果不是保留字，可以不加反引号，但为了保险起见，建议加上反引号。

例如：

\`\`\`sql
-- 正确用法
SELECT \`name\`, \`age\` FROM \`user\` WHERE \`id\` = 1;
SELECT name, age FROM user WHERE id = 1;

-- 错误用法
SELECT 'name', 'age' FROM 'user' WHERE 'id' = 1;
SELECT "name", "age" FROM "user" WHERE "id" = 1;
\`\`\`

\`\`\`sql
如下：创建user表：

create table if not EXISTS user
(id int UNSIGNED AUTO_INCREMENT,
userName VARCHAR(100) NOT NULL,
passWord VARCHAR(100) NOT NULL,
PRIMARY KEY(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



也可以加上反引号
create table if not EXISTS \`user\`
(\`id\` int UNSIGNED AUTO_INCREMENT,
\`userName\` VARCHAR(100) NOT NULL,
\`passWord\` VARCHAR(100) NOT NULL,
PRIMARY KEY(\`id\`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

注：
\`\`\`

> 关于配置ENGINE=InnoDB innoDB 是 MySQL 上第一个提供外键约束的数据存储引擎，除了提供事务处理外，InnoDB 还支持行锁，提供和 Oracle 一样的一致性的不加锁读取，能增加并发读的用户数量并提高性能，不会增加锁的数量。InnoDB 的设计目标是处理大容量数据时最大化性能，它的 CPU 利用率是其他所有基于磁盘的关系数据库引擎中最有效率的。

# 总之

<font color=#39c5bb>**① 表名和字段名，即使是中文也不用加单引号；如果要加,加的也是反引号,所以为了安全起见可以在表名和字段名上都加上\`\`。**</font>

<font color=#39c5bb>**② 对于表格内的value值，要不要加单引号取决于这个字段设置的数据类型**</font>
`
      }
    ]
  },
  {
    name: "李四",
    article: [
      {
        title: "# Test Title",
        content: "## Test Content",
      }
    ]
  },
])
const pageSize = ref(16)
const currPage = ref(1)
const handbook = ref("#### how to use mavonEditor in nuxt.js")
</script>

<template>
  <div class="flex flex-col w-full gap-3 py-3 divide-y divide-miku divide-dashed dark:bg-base-200">

    <div class="flex-1 bg-white p-6 rounded-sm">
      <div class="text-center text-black">
        <h1 class="font-bold text-3xl">{{authors[0].article[0].title}}</h1>
      </div>
      <div class="mt-4 mx-2.5">
        <span class="bg-miku rounded-xl text-white  px-3 py-1.5 text-md mr-2.5"># Notes</span>
        <span class="bg-miku rounded-xl text-white  px-3 py-1.5 text-md mr-2.5"># Notes</span>
        <span class="bg-miku rounded-xl text-white  px-3 py-1.5 text-md mr-2.5"># Notes</span>
        <span class="bg-miku rounded-xl text-white  px-3 py-1.5 text-md mr-2.5"># Notes</span>
      </div>
    </div>

    <div class="w-full rounded-lg shadow-xl flex flex-col">


        <div>

          <mavon-editor v-model="authors[0].article[0].content" :subfield="false" :defaultOpen="'preview'" :toolbarsFlag="false"
                        :boxShadow="false" :transition="false" />
        </div>
    </div>

    <div class="block mt-2 py-5 ">
      <span class="w-full px-3 py-1.5 text-md text-white bg-miku rounded-full"># 二次元</span>
    </div>


    <div class="grid grid-cols-2">
      <div class="hero" style="background-image: url(https://cdn.jsdelivr.net/gh/yumubi/Image-hosting-service@main/covers/banner.59r933wrxbs0.webp);">
        <div class="hero-overlay bg-opacity-60 hover:bg-opacity-10"></div>
        <div class="hero-content text-center text-neutral-content flex flex-col">
          <div><p class="font-bold">前一篇</p></div>
          <div>
            <p class="mb-5">SpringMVC</p>
          </div>
        </div>
      </div>

      <div class="hero" style="background-image: url(https://cdn.jsdelivr.net/gh/yumubi/Image-hosting-service@main/covers/banner.59r933wrxbs0.webp);">
        <div class="hero-overlay bg-opacity-60 hover:bg-opacity-10"></div>
        <div class="hero-content text-center text-neutral-content flex flex-col">
          <div><p>前一篇</p></div>
          <div>
            <p class="mb-5">SpringMVC</p>
          </div>
        </div>
      </div>
    </div>

  </div>

</template>

<style scoped>

</style>
