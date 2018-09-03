FROM microsoft/dotnet:2.1-sdk AS build
WORKDIR /app

WORKDIR /src
COPY remind-me.csproj web/
RUN dotnet restore web/remind-me.csproj
WORKDIR /src/web
COPY . .
RUN dotnet build remind-me.csproj -c Release -o /app

FROM build AS publish
RUN dotnet publish remind-me.csproj -c Release -o /app

FROM microsoft/dotnet:2.1-aspnetcore-runtime AS runtime
WORKDIR /app
COPY --from=publish /app/ .
ENTRYPOINT ["dotnet", "web/remind-me.dll"]
