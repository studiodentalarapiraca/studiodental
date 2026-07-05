# Como publicar o Studio Dental (passo a passo)

Este guia não exige saber programar. Você vai fazer isso **uma vez só** — depois disso, editar conteúdo é só usar o painel `/admin`.

## 1. Criar conta no GitHub
1. Acesse github.com e crie uma conta gratuita (se ainda não tiver).
2. Crie um novo repositório (botão verde "New"), chame de `studio-dental`, marque como **Private** ou **Public** (tanto faz), e clique em criar.
3. Na página do repositório vazio, clique em "uploading an existing file" e arraste TODOS os arquivos e pastas deste projeto (mantendo a estrutura de pastas).
4. Clique em "Commit changes".

## 2. Criar conta no Netlify e conectar o repositório
1. Acesse netlify.com e crie uma conta gratuita (pode entrar direto com o GitHub).
2. Clique em "Add new site" → "Import an existing project" → escolha GitHub → selecione o repositório `studio-dental`.
3. Configurações de build (o Netlify já deve preencher sozinho pelo `netlify.toml`):
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Clique em "Deploy site". Em 1-2 minutos seu site estará no ar num endereço tipo `nome-aleatorio.netlify.app`.

## 3. Ativar o painel de edição (Identity + Git Gateway)
1. No painel do Netlify, vá em **Site settings → Identity** e clique em "Enable Identity".
2. Em "Registration", deixe como "Invite only" (assim só você tem acesso ao painel).
3. Vá em **Identity → Services → Git Gateway** e clique em "Enable Git Gateway".
4. Volte para a aba "Identity" e clique em "Invite users" → digite seu e-mail. Você vai receber um convite para criar sua senha de acesso ao painel.

## 4. Apontar o domínio studiodental.net para o Netlify
Como o domínio está registrado no próprio Wix, você tem duas opções (a primeira é mais simples):

**Opção A — Netlify DNS (recomendado):**
1. No Netlify, vá em **Domain settings → Add a domain** e digite `studiodental.net`.
2. O Netlify vai te dar 2 ou mais endereços de "nameservers" (algo como `dns1.p01.nsone.net`).
3. No painel do Wix (onde o domínio está registrado), vá nas configurações de DNS/nameservers do domínio e troque pelos nameservers que o Netlify te deu.
4. A propagação pode levar de algumas horas até 24h.

**Opção B — manter DNS no Wix:**
1. No Netlify, adicione o domínio e escolha "I don't want to use Netlify DNS".
2. O Netlify vai te dar um registro tipo `CNAME` ou `A record` pra configurar.
3. No painel de DNS do Wix, adicione esse registro manualmente.

## 5. Usar o painel de edição no dia a dia
Depois de tudo publicado, acesse **studiodental.net/admin** (ou o endereço temporário do Netlify + `/admin`), faça login com o e-mail que você convidou, e edite:
- **Tratamentos**: adicionar, remover ou reordenar
- **Portfólio**: subir novas fotos de antes/depois

Toda alteração salva já publica o site atualizado automaticamente em 1-2 minutos.

## 6. Rodar o site no seu computador (opcional, pra testar antes de publicar)
Se quiser ver o site rodando localmente antes de subir pro GitHub:
```
npm install
npm run dev
```
Isso abre o site em `http://localhost:4321`.

---
**Dúvidas comuns:**
- *"O painel não abre"* → confirme que ativou Identity + Git Gateway (passo 3) e que aceitou o convite por e-mail.
- *"Mudei algo e não apareceu no site"* → espere 1-2 min (o Netlify reconstrói o site a cada alteração) e dê um refresh forçado (Ctrl+Shift+R).
