## git配置

https://www.cnblogs.com/zle1992/p/9087713.html

## SSH连接（不用每次输入账号密码）

首先在本地创建 ssh key：

```
ssh-keygen -t rsa -C "your_email@youremail.com"
```

后面的 your_email@youremail.com 改为自己的邮箱，之后会要求确认路径和输入密码，这里使用默认的一路回车就行。成功的话会在 ~/ 下生成 .ssh 文件夹，打开 id_rsa.pub，复制里面的 key，回到 github，进入 settings，左边选择 SSH keys，Add SSH Key，title 随便填，粘贴 key。为了验证是否成功，在 git bash 下输入：

```
ssh -T git@github.com
```

如果是第一次的会提示是否 continue，输入 yes 就会看到：You've successfully authenticated, but GitHub does not provide shell access，这就表示已成功连上 github。

接下来我们要做的就是把 github 上面建立的仓库克隆到本地.

```
git add .
git commit -m 'update'
git push
```



## 获取 Git 仓库

通常有两种获取 Git 项目仓库的方式：

1. 将尚未进行版本控制的本地目录转换为 Git 仓库；
2. 从其它服务器 **克隆** 一个已存在的 Git 仓库。

两种方式都会在你的本地机器上得到一个工作就绪的 Git 仓库。

### 在已存在目录中初始化仓库

如果你有一个尚未进行版本控制的项目目录，想要用 Git 来控制它，那么首先需要进入该项目目录中。 如果你还没这样做过，那么不同系统上的做法有些不同：

在 Windows 上：

```console
$ cd /c/user/my_project
```

之后执行：

```console
$ git init
```

该命令将创建一个名为 `.git` 的子目录，这个子目录含有你初始化的 Git 仓库中所有的必须文件，这些文件是 Git 仓库的骨干。 但是，在这个时候，我们仅仅是做了一个初始化的操作，你的项目里的文件还没有被跟踪。 (参见 [Git 内部原理](https://git-scm.com/book/zh/v2/ch00/ch10-git-internals) 来了解更多关于到底 `.git` 文件夹中包含了哪些文件的信息。)

如果在一个已存在文件的文件夹（而非空文件夹）中进行版本控制，你应该开始追踪这些文件并进行初始提交。 可以通过 `git add` 命令来指定所需的文件来进行追踪，然后执行 `git commit` ：

```console
$ git add *.c
$ git add LICENSE
$ git commit -m 'initial project version'
```

稍后我们再逐一解释这些指令的行为。 现在，你已经得到了一个存在被追踪文件与初始提交的 Git 仓库。

### 克隆现有的仓库

如果你想获得一份已经存在了的 Git 仓库的拷贝，比如说，你想为某个开源项目贡献自己的一份力，这时就要用到 `git clone` 命令。 如果你对其它的 VCS 系统（比如说 Subversion）很熟悉，请留心一下你所使用的命令是"clone"而不是"checkout"。 这是 Git 区别于其它版本控制系统的一个重要特性，Git 克隆的是该 Git 仓库服务器上的几乎所有数据，而不是仅仅复制完成你的工作所需要文件。 当你执行 `git clone` 命令的时候，默认配置下远程 Git 仓库中的每一个文件的每一个版本都将被拉取下来。 事实上，如果你的服务器的磁盘坏掉了，你通常可以使用任何一个克隆下来的用户端来重建服务器上的仓库 （虽然可能会丢失某些服务器端的钩子（hook）设置，但是所有版本的数据仍在，详见 [在服务器上搭建 Git](https://git-scm.com/book/zh/v2/ch00/_getting_git_on_a_server) ）。

克隆仓库的命令是 `git clone <url>` 。 比如，要克隆 Git 的链接库 `libgit2`，可以用下面的命令：

```console
$ git clone https://github.com/libgit2/libgit2
```

这会在当前目录下创建一个名为 “libgit2” 的目录，并在这个目录下初始化一个 `.git` 文件夹， 从远程仓库拉取下所有数据放入 `.git` 文件夹，然后从中读取最新版本的文件的拷贝。 如果你进入到这个新建的 `libgit2` 文件夹，你会发现所有的项目文件已经在里面了，准备就绪等待后续的开发和使用。

如果你想在克隆远程仓库的时候，自定义本地仓库的名字，你可以通过额外的参数指定新的目录名：

```console
$ git clone https://github.com/libgit2/libgit2 mylibgit
```

这会执行与上一条命令相同的操作，但目标目录名变为了 `mylibgit`。

Git 支持多种数据传输协议。 上面的例子使用的是 `https://` 协议，不过你也可以使用 `git://` 协议或者使用 SSH 传输协议，比如 `user@server:path/to/repo.git` 。 

## 远程仓库的使用

https://git-scm.com/book/zh/v2/Git-%E5%9F%BA%E7%A1%80-%E8%BF%9C%E7%A8%8B%E4%BB%93%E5%BA%93%E7%9A%84%E4%BD%BF%E7%94%A8