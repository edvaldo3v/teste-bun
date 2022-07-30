FROM jarredsumner/bun:edge

WORKDIR /usr/app

COPY . .

EXPOSE 8000

CMD ["bun", "src/index.ts"]