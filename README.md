# RS Representações — projeto independente

Este pacote contém o código-fonte completo do site e as 19 imagens WebP usadas nas páginas Início, Produtos e Contato. As imagens foram incorporadas ao projeto; não dependem do armazenamento interno do Lovable.

## Desenvolvimento

Requer Node.js 20 ou superior. Na raiz do projeto:

```sh
npm ci
npm run dev
```

## Publicação na Vercel

Crie ou importe um repositório GitHub com os arquivos desta pasta na raiz. Na Vercel, importe esse repositório como um novo projeto. O `vercel.json` identifica o framework como TanStack Start, e o build usa Nitro com destino Vercel. O `package-lock.json` fixa as dependências para a instalação reproduzível. Não há variáveis de ambiente obrigatórias para as três páginas.

O domínio publicado pelo Lovable continuará separado até que o domínio definitivo seja configurado no novo projeto. As marcas na página de produtos usam nomes em texto quando não existe a chave opcional de logo.dev.

O ZIP é o pacote de código-fonte para o GitHub/SiteSync. Não envie a pasta `node_modules`, `.vercel` ou `.output` ao repositório.
