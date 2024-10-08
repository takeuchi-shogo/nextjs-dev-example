# 開発環境用のベースイメージ
FROM node:20-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install --frozen-lockfile

COPY . .
RUN npm run build

# 本番用のイメージを別に作成
FROM node:20-alpine AS runner
WORKDIR /app

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

COPY --from=builder /app/tailwind.config.ts ./tailwind.config.ts
COPY --from=builder /app/postcss.config.mjs ./postcss.config.mjs

# 環境変数とポート設定
# ENV NODE_ENV production
ENV PORT 3000
EXPOSE 3000

CMD ["npm", "start"]
