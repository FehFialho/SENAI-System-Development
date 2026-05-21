## Excluir Pastas Desncessárias

Config, Src/Models e Src/Database

```npx prisma init```

### Modelos
Criar modelos no prisma/schema.prisma
```
model User{
  id Int @id @default(autoincrement())
  email String @unique
}
```

### Migration
```npx prisma migrate dev```


```npx prisma studio```

