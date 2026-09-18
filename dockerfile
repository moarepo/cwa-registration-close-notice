# ---------- Build Stage ----------
FROM node:26-alpine3.23 AS base
RUN npm install -g pnpm

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN pnpm install

COPY . .
RUN pnpm build

# ---------- Production Stage ---------- 
FROM  nginxinc/nginx-unprivileged:alpine3.23-perl AS production
COPY --from=base /app/dist /usr/share/nginx/html
EXPOSE 8080
CMD [ "nginx","-g","daemon off;" ]