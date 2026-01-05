# Site Lorgil - Modelo de Site com Next.js e React

Este é um projeto de exemplo criado com [Next.js](https://nextjs.org) que demonstra como estruturar uma página web moderna utilizando componentes React.

## Começando

Primeiro, instale as dependências e execute o servidor de desenvolvimento:

```bash
npm install
npm run dev
# ou
yarn install
yarn dev
# ou
pnpm install
pnpm dev
# ou
bun install
bun dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## Estrutura do Projeto

Este projeto possui uma estrutura como um modelo para você aprender a criar sites com React e Next.js. A estrutura principal inclui:

### Componentes

O projeto está organizado em componentes reutilizáveis na pasta `src/components/`:

- `Section1`: Uma seção de destaque/hero
- `Section2`: Uma seção para exibição de produtos
- `CardOculos`: Um componente de card para exibir produtos

### Página Principal

A página principal (`src/app/page.tsx`) integra as seções e define o layout básico.

## Guia para Iniciantes

### Como modificar as seções

#### Alterando o conteúdo de uma seção
O componente SectionExemplo possue um modelo base de como você pode criar uma seção. Para criar uma nova section você pode compiar toda a pasta `SectionExemplo` e renomear para `SectionXXX`, ou criar uma nova pasta com o nome que desejar.

Você nunca deve alterar o nome da pasta, ou excluir a pasta `SectionExemplo`, pois ela é utilizada como exemplo para você aprender a criar novas seções.

Para modificar o conteúdo da `Section1`, abra o arquivo `src/components/Section1/index.tsx` e altere o texto dentro das tags:

```tsx
<h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Seu Título Aqui</h1>
<p className="text-lg mb-6 text-center max-w-3xl mx-auto">
  Seu texto aqui
</p>
```

#### Alterando cores e estilos

Para alterar a cor de fundo da seção, modifique a classe de cor no elemento `section`:

```tsx
<section className="w-full py-20 bg-blue-100"> // Alterado de bg-gray-100
```

Para alterar a cor do botão:

```tsx
<button className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white...">
```

### Como trabalhar com o Card de Produtos

O componente `CardOculos` recebe duas propriedades (props):

- `title`: O título do produto
- `description`: A descrição do produto

Para utilizá-lo, importe-o e passe as props necessárias:

```tsx
import CardOculos from '../CardOculos'

// Em seu componente:
<CardOculos 
  title="Nome do Produto" 
  description="Descrição do produto" 
/>
```

#### Adicionando mais Cards

Para adicionar mais cards em `Section2`, simplesmente adicione mais componentes `CardOculos`:

```tsx
<div className="flex flex-wrap justify-center items-stretch gap-4 mb-10">
  <CardOculos title="Óculos Classic" description="Modelo clássico perfeito para qualquer ocasião" />
  <CardOculos title="Óculos Sport" description="Ideal para atividades ao ar livre e esportes" />
  <CardOculos title="Óculos Fashion" description="O mais novo modelo da coleção" />
</div>
```

### Criando uma Nova Seção

Para criar uma nova seção:

1. Crie uma nova pasta em `src/components/` (por exemplo, `Section3`)
2. Crie um arquivo `index.tsx` dentro dessa pasta
3. Copie a estrutura básica de uma seção existente e modifique conforme necessário
4. Importe e adicione a nova seção em `src/app/page.tsx`:

```tsx
import Section1 from '@/components/Section1'
import Section2 from '@/components/Section2'
import Section3 from '@/components/Section3' // Nova importação

export default function Home() {
  return (
    <main className='min-h-screen flex flex-col items-center justify-center'>
      <Section1 />
      <Section2 />
      <Section3 /> {/* Nova seção adicionada */}
    </main>
  )
}
```

### Dicas de Estilização com Tailwind CSS

O projeto utiliza [Tailwind CSS](https://tailwindcss.com/) para estilização. Alguns exemplos de classes úteis:

- Cores de fundo: `bg-gray-100`, `bg-blue-500`, `bg-red-500`
- Espaçamento: `p-6` (padding), `m-4` (margin), `py-20` (padding vertical)
- Tamanho de texto: `text-lg`, `text-xl`, `text-4xl`
- Flexbox: `flex`, `flex-col`, `justify-center`, `items-center`
- Bordas e sombras: `rounded-lg`, `shadow-md`

## Recursos de Aprendizado

- [Next.js Documentação](https://nextjs.org/docs) - aprenda sobre Next.js
- [React Documentação](https://react.dev) - aprenda React
- [Tailwind CSS Documentação](https://tailwindcss.com/docs) - aprenda Tailwind CSS

## Deploy na Vercel

A maneira mais fácil de fazer o deploy do seu app Next.js é usar a [Vercel Platform](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example).

