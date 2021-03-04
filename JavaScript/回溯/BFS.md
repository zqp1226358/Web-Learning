可以看到，「BFS 遍历」、「层序遍历」、「最短路径」实际上是递进的关系。在 BFS 遍历的基础上区分遍历的每一层，就得到了层序遍历。在层序遍历的基础上记录层数，就得到了最短路径。

BFS 遍历是一类很值得反复体会和练习的题目。一方面，BFS 遍历是一个经典的基础算法，需要重点掌握。另一方面，我们需要能根据题意分析出题目是要求最短路径，知道是要做 BFS 遍历。

本文讲解的只是两道非常典型的例题。LeetCode 中还有许多层序遍历和最短路径的题目

层序遍历的一些变种题目：

LeetCode 103. Binary Tree Zigzag Level Order Traversal 之字形层序遍历
LeetCode 199. Binary Tree Right Side View 找每一层的最右结点
LeetCode 515. Find Largest Value in Each Tree Row 计算每一层的最大值
LeetCode 637. Average of Levels in Binary Tree 计算每一层的平均值
对于最短路径问题，还有两道题目也是求网格结构中的最短路径，和我们讲解的距离岛屿的最远距离非常类似：

LeetCode 542. 01 Matrix
LeetCode 994. Rotting Oranges
还有一道在真正的图结构中求最短路径的问题：

LeetCode 310. Minimum Height Trees

来源：https://leetcode-cn.com/problems/binary-tree-level-order-traversal/solution/bfs-de-shi-yong-chang-jing-zong-jie-ceng-xu-bian-l/



网格结构的BFS和DFS（如岛屿问题）

