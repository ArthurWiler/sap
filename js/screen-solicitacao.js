function SolicitacaoPage({ data, onBack }) {
  const [tab, setTab] = useState("dados-basicos");

  return (
    <Fragment>
      {/* Header */}
      <div className="det-header">
        <div className="back-arrow" onClick={onBack} title="Voltar">
          <Icon name="arrow-left" size={18} />
        </div>
        <div
          className="sap-logo"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            background: "var(--sap-blue-logo)",
            color: "white",
            fontWeight: 700,
            fontSize: 13,
            width: 44,
            height: 22,
            letterSpacing: "0.5px",
            transform: "skewX(-12deg)",
            borderRadius: 1,
          }}
        >
          <span style={{ transform: "skewX(12deg)" }}>SAP</span>
        </div>
        <div className="det-title">
          Solicitação de ligação (UN) - Analisar Carga Rede Aérea - Exibir{" "}
          <Icon name="chevron-down" size={14} />
        </div>
        <div className="spacer" />
        <div className="icon-btn">
          <Icon name="search" size={18} />
        </div>
        <div className="icon-btn">
          <Icon name="help" size={18} />
        </div>
        <div className="icon-btn">
          <Icon name="bell" size={18} />
        </div>
        <div className="avatar">
          <Icon name="user" size={18} />
        </div>
      </div>

      {/* Simpler toolbar */}
      <div className="det-toolbar solic-toolbar">
        <button className="menu-btn">
          Menu <Icon name="chevron-down" size={12} />
        </button>
        <button className="tool-btn pill">Modificar ou exibir</button>
        <button className="tool-btn pill">Documentos Anexos</button>
        <div className="right">
          <span className="sair-btn" onClick={onBack}>
            Voltar
          </span>
        </div>
      </div>

      <div className="solic-body">
        {/* === Dados da solicitação === */}
        <div className="solic-section">
          <div className="solic-section-title">Dados da solicitação</div>

          <div className="frow">
            <Field
              label="Solicitação"
              value={data.solicitacaoNum}
              w="md"
              lw="sm"
              highlight
            />
            <div className="ffield">
              <span className="flabel lw-md">Tipo de Serviço:</span>
              <input
                className="sap-input w-sm"
                value={data.tipoServCod}
                readOnly
              />
              <input
                className="sap-input w-lg"
                value={data.tipoServDesc}
                readOnly
                style={{ width: 200 }}
              />
            </div>
            <div className="status-box">{data.statusSolic}</div>
          </div>

          <div className="frow">
            <div className="ffield" data-tour-id="parc_neg">
              <span className="flabel lw-sm">Parc.negóc.:</span>
              <input
                className="sap-input w-md"
                value={data.parcNegoc}
                readOnly
              />
              <input
                className="sap-input w-lg"
                value={data.nomeParc}
                readOnly
              />
            </div>
            <div className="grow" />
            <Field
              label="Dt.Status"
              value={data.dtStatus}
              w="md"
              lw="sm"
            />
          </div>

          <div className="frow">
            <Field
              label="Instalação"
              value={data.instalacao}
              w="md"
              lw="sm"
              tourId="inst_cliente"
            />
            <Field
              label="Objeto de ligação"
              value={data.objetoLigacao}
              w="md"
              lw="md"
            />
            <Field
              label="Nota de serviço"
              value={data.notaServico}
              w="md"
              lw="md"
              link
              onClick={onBack}
            />
            <Field
              label="Nº do Protocolo"
              value={data.protocolo}
              w="md"
              lw="md"
            />
          </div>
        </div>

        {/* === Tabs === */}
        <div className="sub-tabs solic-tabs">
          <div
            className={
              "stab" + (tab === "dados-basicos" ? " active" : "")
            }
            onClick={() => setTab("dados-basicos")}
          >
            Dados Básicos
          </div>
          <div
            className={"stab" + (tab === "enderecos" ? " active" : "")}
            onClick={() => setTab("enderecos")}
          >
            Endereços
          </div>
          <div
            className={"stab" + (tab === "uc" ? " active" : "")}
            onClick={() => setTab("uc")}
          >
            Unidades Consumidoras
          </div>
          <div
            className={"stab" + (tab === "beneficiados" ? " active" : "")}
            onClick={() => setTab("beneficiados")}
          >
            Beneficiados
          </div>
          <div
            className={"stab" + (tab === "rel-carga" ? " active" : "")}
            onClick={() => setTab("rel-carga")}
          >
            Rel. Carga
          </div>
          <div
            className={
              "stab" + (tab === "rel-carga-res" ? " active" : "")
            }
            onClick={() => setTab("rel-carga-res")}
          >
            Rel. Carga - Resumo
          </div>
        </div>

        {tab !== "dados-basicos" ? (
          <div
            style={{
              padding: "24px 12px",
              color: "var(--text-secondary)",
              fontSize: 13,
            }}
          >
            <em>
              Conteúdo desta aba não implementado nesta demonstração
              visual.
            </em>
          </div>
        ) : (
          <Fragment>
            {/* === Endereço === */}
            <div className="solic-section" style={{ marginTop: 14 }}>
              <div className="solic-section-title">Endereço</div>

              <div className="frow">
                <Field
                  label="Região"
                  value={data.regiao}
                  w="sm"
                  lw="sm"
                />
                <Field
                  label="Cidade"
                  value={data.cidade}
                  w="xl"
                  lw="sm"
                  tourId="munic"
                />
                <div className="grow" />
                <Check checked label="Apresentou documentos" />
              </div>

              <div className="frow">
                <Radio checked label="Cadastrada" />
                <Radio label="Rural" />
                <Radio label="Não cadastrada" />
                <div className="grow" />
                <Field
                  label="Código postal"
                  value={data.cep}
                  w="md"
                  lw="md"
                />
                <Field
                  label="Bairro"
                  value={data.bairro}
                  w="xl"
                  lw="sm"
                  tourId="bairro"
                />
              </div>

              <div className="frow">
                <Field label="Rua" value={data.rua} w="xl" lw="sm" tourId="ender" />
                <div className="grow" />
                <Field label="Nº" value={data.numero} w="sm" lw="sm" />
              </div>

              <div className="frow">
                <div className="grow" />
                <div className="ffield" data-tour-id="complemento">
                  <span className="flabel lw-sm">Compl:</span>
                  <input
                    className="sap-input w-sm"
                    value={data.compl1}
                    readOnly
                  />
                  <input
                    className="sap-input w-sm"
                    value={data.compl2}
                    readOnly
                  />
                </div>
                <div className="ffield">
                  <span className="flabel lw-sm">Bloco:</span>
                  <input
                    className="sap-input w-sm"
                    value={data.bloco1}
                    readOnly
                  />
                  <input
                    className="sap-input w-sm"
                    value={data.bloco2}
                    readOnly
                  />
                </div>
              </div>

              <div className="frow">
                <Field
                  label="Referência / Bairro"
                  value=""
                  w="xl"
                  lw="md"
                  tourId="ref"
                />
                <Field label="Latitude" value={data.lat} w="md" lw="sm" />
                <Field
                  label="Longitude"
                  value={data.lng}
                  w="md"
                  lw="sm"
                />
              </div>
            </div>

            {/* === Dados para comunicação === */}
            <div className="solic-section">
              <div className="solic-section-title">
                Dados para comunicação com o solicitante e com o Cliente
              </div>

              <div className="frow">
                <Field
                  label="Nome do solicitante"
                  value={data.nomeSolic}
                  w="xl"
                  lw="lg"
                  tourId="nome_solic"
                />
                <div className="grow" />
                <Field label="Tel" value={data.tel} w="md" lw="sm" />
                <Field label="Cel" value={data.cel} w="md" lw="sm" />
              </div>
              <div className="frow">
                <Field
                  label="E-mail do Cliente"
                  value={data.email1}
                  w="xl"
                  lw="lg"
                />
              </div>
              <div className="frow">
                <Field
                  label="E-mail Resp Técnico"
                  value={data.email2}
                  w="xl"
                  lw="lg"
                />
              </div>
              <div className="frow">
                <Field
                  label="Adesão Fatura E-mail"
                  value=""
                  w="xl"
                  lw="lg"
                />
              </div>
            </div>

            {/* === NS === */}
            <div className="solic-section">
              <div className="solic-section-title">NS</div>
              <div className="frow">
                <Field
                  label="Assunto da NS"
                  value={data.assuntoNS}
                  w="xl"
                  lw="md"
                />
              </div>
            </div>

            {/* === Características === */}
            <div className="solic-section">
              <div className="solic-section-title">Características</div>

              <div className="frow">
                <Select
                  label="Loc.Física"
                  value={data.locFis}
                  w="lg"
                  lw="md"
                  tourId="localiz"
                />
                <Select
                  label="Prog. elet."
                  value={data.progElet}
                  w="sm"
                  lw="md"
                />
                <Select label="Grupo" value={data.grupo} w="sm" lw="md" tourId="grp" />
              </div>
              <div className="frow">
                <Select
                  label="Tp.loc.consumo"
                  value={data.tpLocConsumo}
                  w="lg"
                  lw="md"
                  tourId="loc_consumo"
                />
                <div className="ffield" data-tour-id="ramo_atv">
                  <span className="flabel lw-md">Ramo Atividade:</span>
                  <input
                    className="sap-input w-sm"
                    value={data.ramoAtividade}
                    readOnly
                  />
                  <input className="sap-input w-md" value="" readOnly />
                </div>
                <div className="ffield" data-tour-id="class_subclass">
                  <span className="flabel lw-md">Classe/Sub.Classe:</span>
                  <input
                    className="sap-input w-sm"
                    value={data.classeSubClasse}
                    readOnly
                  />
                </div>
              </div>
              <div className="frow">
                <Select label="Trafo" value={data.trafo} w="md" lw="md" />
                <Select
                  label="Tipo de ligação"
                  value={data.tipoLig}
                  w="md"
                  lw="md"
                  tourId="tp_lig"
                />
                <div className="ffield" data-tour-id="disjunt">
                  <span className="flabel lw-md">Disjuntor:</span>
                  <input
                    className="sap-input w-sm"
                    value={data.disjuntorCod}
                    readOnly
                  />
                  <span style={{ fontSize: 13, color: "var(--text)" }}>
                    {data.disjuntorDesc}
                  </span>
                </div>
                <Field label="Opção de vencto" value="" w="md" lw="md" />
              </div>
              <div className="frow">
                <Field
                  label="Tipo Solicitação"
                  value={data.tipoSolicitacao}
                  w="sm"
                  lw="md"
                  tourId="tp_solicit"
                />
              </div>
              <div className="frow">
                <Select
                  label="Assentamento Irregular"
                  value={data.assentIrreg}
                  w="sm"
                  lw="lg"
                />
                <Select label="Coordenograma?" value="" w="sm" lw="md" />
                <Select
                  label="Projeto Elétrico?"
                  value=""
                  w="sm"
                  lw="md"
                />
                <Check label="Tarifa Branca" />
              </div>
            </div>

            {/* === Faturamento globalizado === */}
            <div className="solic-section">
              <div className="solic-section-title">
                Faturamento globalizado
              </div>
              <div className="frow">
                <Field label="Cta.contrato" value="" w="md" lw="sm" />
                <Field label="Nome contrato" value="" w="xl" lw="md" />
                <Field label="CNPJ" value="" w="md" lw="sm" />
                <Field label="Insc. est." value="" w="md" lw="sm" />
              </div>
            </div>

            {/* === Outras informações === */}
            <div className="solic-section">
              <div className="solic-section-title">
                Outras informações
              </div>
              <div className="frow">
                <Check
                  checked={data.possuiLaudoMed}
                  label="Possui Laudo Médico"
                />
                <Select
                  label="Possui CADUNICO ou BPC ?"
                  value={data.possuiCadunico}
                  w="sm"
                  lw="xl"
                />
                <Select
                  label="Cad. atualizado < 60 dias"
                  value={data.cadAtualizado}
                  w="sm"
                  lw="xl"
                />
                <Select
                  label="Transfere TSEE p/ IN"
                  value={data.transfereTSEE}
                  w="sm"
                  lw="lg"
                />
              </div>
              <div className="frow">
                <Check
                  checked={data.possuiVE}
                  label="Possui estação de recarga para veículo elétrico"
                />
                <Check
                  checked={data.padraoGratuito}
                  label="Padrão Gratuito"
                />
              </div>
            </div>

            {/* === Informações do disjuntor geral === */}
            <div className="solic-section">
              <div className="solic-section-title">
                Informações do disjuntor geral
              </div>
              <div className="frow">
                <Field
                  label="Nº caixas"
                  value={data.numCaixas}
                  w="sm"
                  lw="md"
                />
                <Select
                  label="Tipo de usuário"
                  value={data.tipoUsuario}
                  w="xl"
                  lw="md"
                />
              </div>
              <div className="frow">
                <Radio
                  checked={data.disjOpt === "projeto"}
                  label="Apresentação Projeto Elétrico"
                />
                <div className="grow" />
                <Check
                  checked={data.atendHibrido}
                  label="Atendimento Híbrido"
                />
              </div>
              <div className="frow">
                <Radio
                  checked={data.disjOpt === "com"}
                  label="Orçamento de Conexão com Disj Geral"
                />
                <div className="grow" />
                <Field
                  label="Quantidade disjuntor geral"
                  value={data.qtdDisjGeral}
                  w="sm"
                  lw="lg"
                  tourId="qtd_geral"
                />
                <Field
                  label="Disjuntor Geral"
                  value={data.disjGeralVal}
                  w="sm"
                  lw="md"
                  tourId="disj_ger"
                />
              </div>
              <div className="frow">
                <Radio
                  checked={data.disjOpt === "sem"}
                  label="Orçamento de Conexão sem Disj Geral"
                />
                <div className="grow" />
                <Field
                  label="Carga Instalada ou Demanda(kW)"
                  value={data.cargaKw}
                  w="md"
                  lw="xl"
                />
              </div>
              <div className="frow">
                <Radio
                  checked={data.disjOpt === "estimado"}
                  label="Orçamento Estimado"
                />
              </div>
            </div>

            {/* === Previsão de conexão das instalações === */}
            <div className="solic-section">
              <div className="solic-section-title">
                Previsão de conexão das instalações
              </div>
              <div className="frow">
                <Select
                  label="Padrão/Subestação/Usina está(ão) pronto(s)?"
                  value={data.padraoPronto}
                  w="sm"
                  lw="xl"
                />
              </div>
            </div>

            {/* === Aprovação de projeto === */}
            <div className="solic-section">
              <div className="solic-section-title">
                Aprovação de projeto
              </div>
              <div className="frow">
                <Field
                  label="ART de projeto"
                  value={data.artProjeto}
                  w="lg"
                  lw="md"
                />
                <Field
                  label="ART de execução"
                  value={data.artExecucao}
                  w="lg"
                  lw="md"
                />
              </div>
            </div>

            {/* === Análise de carga === */}
            <div className="solic-section">
              <div className="solic-section-title">Análise de carga</div>
              <div className="frow">
                <Select
                  label="Modalidade"
                  value={data.modalidadeAC}
                  w="md"
                  lw="md"
                />
              </div>
            </div>

            {/* === Outros dados === */}
            <div className="solic-section">
              <div className="solic-section-title">Outros dados</div>
              <div className="frow">
                <Field
                  label="Class grandes clientes"
                  value={data.classGrandes}
                  w="sm"
                  lw="lg"
                />
                <Field
                  label="Consumo estimado"
                  value={data.consumoEstimado}
                  w="md"
                  lw="md"
                />
              </div>
            </div>
          </Fragment>
        )}
      </div>
    </Fragment>
  );
}

