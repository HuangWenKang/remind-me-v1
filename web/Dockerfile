
FROM microsoft/dotnet:2.1-sdk AS base
WORKDIR /app
EXPOSE 80

FROM microsoft/dotnet:2.1-sdk AS build
WORKDIR /src
COPY remind-me.csproj web/
RUN dotnet restore web/remind-me.csproj
WORKDIR /src/web
COPY . .
RUN dotnet build remind-me.csproj -c Release -o /app

FROM build AS publish
RUN dotnet publish remind-me.csproj -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "web/remind-me.dll"]
