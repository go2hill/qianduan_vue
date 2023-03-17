<template>
    <div class="detail-page">
        <h1 class="title">{{ item.title }}</h1>
        <div class="content">
            <img :src="item.image" alt="" class="image" />
            <div class="description">{{ item.description }}</div>
            <div class="info">
                <el-row>
                    <el-col :span="12">
                        <div class="info-item">
                            <span class="label">发布日期：</span>
                            <span class="value">{{ item.date }}</span>
                        </div>
                        <div class="info-item">
                            <span class="label">作者：</span>
                            <span class="value">{{ item.author }}</span>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div class="info-item">
                            <span class="label">阅读量：</span>
                            <span class="value">{{ item.views }}</span>
                        </div>
                        <div class="info-item">
                            <span class="label">分类：</span>
                            <span class="value">{{ item.category }}</span>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                item: {
                    title: "title",
                    image: "https://picsum.photos/id/1/800/400",
                    description: "这是一段描述文本",
                    date: "2023-03-13",
                    author: "ChatGPT",
                    views: 100,
                    category: "Vue"
                }
            };
        }
    };
</script>

<style  scoped>
    .detail-page {
        max-width: 800px;
        margin: 0 auto;
        padding: 20px;
    }

    .title {
        font-size: 28px;
        font-weight: bold;
        margin-bottom: 20px;
    }

    .content {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .image {
        width: 100%;
        height: auto;
        margin-bottom: 20px;
    }

    .description {
        font-size: 16px;
        line-height: 1.5;
        margin-bottom: 20px;
    }

    .info {
        margin-top: 20px;
    }

    .info-item {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
    }

    .label {
        color: #666;
        font-size: 14px;
        margin-right: 10px;
    }

    .value {
        font-size: 14px;
    }
    </style>

